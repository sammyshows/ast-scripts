# dummy.rb

def greet(name)
  puts "Hello, #{name}!"
end

numbers = [1, 2, 3, 4, 5]
squares = numbers.map { |num| num * num }

if numbers.size > 3
  puts "More than three numbers."
else
  puts "Three or less."
end

# Defines a class with some simple methods
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    puts "My name is #{@name} and I am #{@age} years old."
  end
end

# Creating an instance of Person
john = Person.new("John", 30)
john.introduce
