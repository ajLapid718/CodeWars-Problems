# Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression

# Example:

# Calculator.new.evaluate("2 / 2 + 3 * 4 - 6") # => 7
# Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

# My solution

class Calculator
  def evaluate(string)
    instance_eval(string)
  end
end

# Better solution

class Calculator
  def evaluate(string)
    [' + ', ' - ', ' * ', ' / '].each do |op|
      if string.include?(op)
        return string.split(op).map { |s| evaluate(s) }.inject(op.strip)
      end
    end
    string.to_f
  end
end

# Clever solution

require 'net/http'

class Calculator
  def evaluate(string)
    return string.to_i if string !~ /\D/

    request = Net::HTTP.post_form(URI.parse('http://web2.0calc.ru/calc'), {'in[]': string})
    response = JSON.parse(request.body)
    response['results'][0]['out'].to_i
  end
end
