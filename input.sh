cat Book6.csv|while IFS=, read -r col1 col2
do
  FOO="\"$col1\": \"$col2\","
  FOO_NO_WHITESPACE="$(echo -e "${FOO}" | tr -d '[:space:]')"
  echo -e ${FOO_NO_WHITESPACE}>>translations.js
done< Book6.csv
