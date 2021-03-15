# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

"""
This script is used to reformat Markdown files coming from the Smartling
platform.

Pass to the script the path of the file to reformat, relative to the root of
the repository.
"""

import argparse
import os
import pathlib
import re
import sys

script_folder = os.path.abspath(os.path.dirname(__file__))
root_folder = os.path.join(script_folder, os.path.pardir, os.path.pardir)

parser = argparse.ArgumentParser()
parser.add_argument("file_path", help="Path to file (relative to repository root")
args = parser.parse_args()
file_path = os.path.join(root_folder, args.file_path)

if not os.path.isfile(file_path):
    sys.exit(f"File {args.file_path} doesn't exist")

output_content = []
with open(file_path) as f:
    input_content = f.readlines()
    for line, text in enumerate(input_content):

        drop_line = False
        if line > 0:
            # Remove escape on parentheses
            text = text.replace("\(", "(").replace("\)", ")")

            # Remove escape on hyphens
            text = text.replace("\-", "-")

            # Convert h1 format
            if text.startswith("==="):
                drop_line = True
                previous_line = output_content.pop()
                output_content.append(f"# {previous_line}")

            # Convert h2 format
            if text.startswith("---"):
                drop_line = True
                previous_line = output_content.pop()
                output_content.append(f"## {previous_line}")

            # Strip trailing whitespaces
            text = text.rstrip() + "\n"

            # Remove double empty lines
            if text.rstrip() == "" and output_content[-1].rstrip() == "":
                drop_line = True

            # (Temporary) Fix bug with extra spaces added after bold and italic text
            text = re.sub(r"\*\s{1}(?=[.,:;?!：])", "*", text)

        if not drop_line:
            output_content.append(text)

# Remove other trailing empty lines
while output_content[-1].rstrip() == "":
    output_content.pop()

with open(file_path, "w") as f:
    f.writelines(output_content)
