# dummy.py

def greet(name):
    print(f"Hello, {name}!")

# List of numbers and a simple comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x ** 2 for x in numbers]

if len(numbers) > 3:
    print("More than three numbers.")
else:
    print("Three or less.")

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"My name is {self.name} and I am {self.age} years old.")

# Creating an instance of Person
john = Person("John", 30)
john.introduce()
