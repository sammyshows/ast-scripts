# index.py
import ast
import pprint
import os

def read_and_parse(filename):
    with open(filename, "r") as file:
        content = file.read()
        parsed_content = ast.parse(content)
        return parsed_content

if __name__ == "__main__":
    # Construct the full path to the dummy file relative to this script
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, 'dummy.py')
    ast_tree = read_and_parse(filename)
    pprint.pprint(ast.dump(ast_tree, indent=4))
