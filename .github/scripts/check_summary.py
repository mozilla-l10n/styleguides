# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import argparse
import os
import pathlib
import re
import sys

script_folder = os.path.abspath(os.path.dirname(__file__))

parser = argparse.ArgumentParser()
parser.add_argument("docs_path", help="Path to folder with docs")
args = parser.parse_args()
docs_path = args.docs_path

if not os.path.isdir(docs_path):
    sys.exit(f"The provided path {docs_path} does not exist.")

# Load exceptions, if the file exist
exceptions_file = os.path.join(script_folder, "summary_exceptions.txt")
exceptions = []
if os.path.isfile(exceptions_file):
    with open(exceptions_file) as f:
        for line in f.readlines():
            line = line.rstrip()
            if line.startswith("#") or line == '':
                continue
            exceptions.append(line)

# Get a list of all .md files
md_files = []
for root, dirs, files in os.walk(docs_path):
    for file in files:
        pl_file = pathlib.Path(os.path.join(root, file))
        if pl_file.suffix == ".md":
            md_files.append(str(pl_file.relative_to(docs_path)))

# Open SUMMARY.md, extract all the links
summary_links = []
with open(os.path.join(docs_path, "SUMMARY.md")) as f:
    for line in f.readlines():
        links = re.search(r"]\((.*.md)\)", line)
        if links is not None:
            summary_links.append(links.group(1))
# Ignore the summary itself
summary_links.append("SUMMARY.md")

# Check if there are files not referenced in summary, also ignore exceptions
extra_files = list(set(md_files) - set(summary_links) - set(exceptions))

# Check if there are files in SUMMARY.md that don't exit
missing_files = list(set(summary_links) - set(md_files))

status = 0
if extra_files:
    print("\nThere are markdown files not referenced in SUMMARY.md")
    for f in extra_files:
        print(f"  - {f}")
    print("To create an exception, add the path above to summary_exceptions.txt")
    status = 1
else:
    print("All markdown files are correctly referenced in SUMMARY.md")

if missing_files:
    print("\nThere are non existing markdown files referenced in SUMMARY.md")
    for f in missing_files:
        print(f"  - {f}")
    status = 1
else:
    print("\nAll markdown files referenced in SUMMARY.md are available in the repository")

sys.exit(status)
