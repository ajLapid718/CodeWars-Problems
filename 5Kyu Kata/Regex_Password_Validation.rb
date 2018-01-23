# You need to write regex that will validate a password to make sure it meets the following criteria:

# - At least six characters long
# - Contains a lowercase letter
# - Contains an uppercase letter
# - Contains a number

# Valid passwords will only be alphanumeric characters.

regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/
