# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

"""
This script is used to reformat Markdown files coming from the Smartling
platform.
"""

import argparse
import os
import pathlib
import re
import sys

script_folder = os.path.abspath(os.path.dirname(__file__))

"""
parser = argparse.ArgumentParser()
parser.add_argument("docs_path", help="Path to folder with docs")
args = parser.parse_args()
docs_path = args.docs_path
"""

filename = "/Users/flodolo/github/styleguides/docs/it/firefox_marketing_it-IT.md"

output_content = []
with open(filename) as f:
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

            # Remove double empty lines
            if text.rstrip() == "" and output_content[-1].rstrip() == "":
                drop_line = True

            # (Temporary) Fix bug with extra spaces added after bold text
            text = re.sub(r"\*\*\s{1}(?=[.:;?])", "**", text)

        if not drop_line:
            output_content.append(text)

# Ensure there's one empty line at the bottom of the file
if output_content[-1].rstrip() == output_content[-1]:
    output_content.append(output_content.pop() + "\n")
# Remove other trailing empty lines
while output_content[-1].rstrip() == "":
    output_content.pop()

with open(filename, "w") as f:
    f.writelines(output_content)
