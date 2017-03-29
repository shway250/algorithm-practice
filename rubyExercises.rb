# Write a method called `p_times` that takes a `statement` and
# a `num` as inputs, and outputs the `statement` some `num` of times
# to the console.
#
# Example method call:
#
# p_times('Hello there', 3)
#
# > Hello there
# > Hello there
# > Hello there

def p_times(word, num)
  # i = 0;
  # while i < num do
  #   puts "#{word}";
  #   i+=1;  
  # end
  for i in (1...num) do
    puts "#{word}"
  end
end

p_times("hurdy gurdy", 4);

# Write a method called `letter_count` to count the letter
# occurrence in a string. Use a hash
#
# Example method call:
#
# letter_count('banana')
#
# > {"b" => 1, "a" => 3, "n" => 2}



def letter_count(word)
  count_obj = Hash.new(0);
  word_arr = word.split('');

  for i in (0...word_arr.length) do
    count_obj[word_arr[i]] += 1
    puts count_obj;
  end 
end

letter_count("banana");

# Write a method called `print_contacts` that takes a
# hash of key-value pairs for names and phone numbers, then
# outputs the `name` with the contact info.
#
# Example method call:
#
# print_contacts(contacts)
#
# > Brian has a phone number of 333-333-3333
# > Lenny has a phone number of 444-444-4444
# > Daniel has a phone number of 777-777-7777
#
# Use the contacts below

contacts = {
  Brian: '333-333-3333',
  Lenny: '444-444-4444',
  Daniel: '777-777-7777'
}

def print_contacts(farge)
  farge.each do |key, value|
    puts "#{key} has the phone number #{value}"
  end
end

print_contacts(contacts);

# Write a method to compute the `factorial` of a number.
# Given a whole number n, a factorial is the product of all
# whole numbers from 1 to n.
# 5! = 5 * 4 * 3 * 2 * 1
#
# Example method call
#
# factorial(5)
#
# > 120
#

def factorial(num)
  temp = 1;
  for i in (1..num) do
    temp = temp * i
  end
  puts temp;
end

factorial(5);