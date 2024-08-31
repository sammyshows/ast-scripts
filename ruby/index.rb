# ruby/index.rb
require 'ripper'
require 'pp'

# Ensure the path is relative to the current script's directory
filename = File.join(__dir__, 'dummy.rb')

# Safely read the Ruby file
begin
  ruby_code = File.read(filename)
  ast = Ripper.sexp(ruby_code)
  pp ast
rescue Errno::ENOENT
  puts "File not found: #{filename}"
end
