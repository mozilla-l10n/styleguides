# $1 is the GitHub repository (e.g. mozilla-l10n/styleguides)
# $2 is the pull request number

# Get the list of files included in the PR
pr_files=$(curl -s -X GET -G https://api.github.com/repos/$1/pulls/$2/files | jq -r '.[] | .filename')

# Store the relative path to the script
script_path=$(dirname "$0")

# Only consider Markdown files (.md)
for f in $pr_files
do
    if [[ "$f" == *.md ]]
    then
        echo "Checking: ${f}"
        python3 "${script_path}/reformat_markdown.py" "${f}"
    fi
done
