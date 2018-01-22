=begin

Your friend Bob is working as a taxi driver. After working for a month he is frustrated in the city's traffic lights. He asks you to write a program for a new type of traffic light. It is made so it turns green for the road with the most congestion.

Example: There are 42 cars waiting on 27th ave. There are 72 cars waiting on 3rd st. Since there are more cars on 3rd st, the light turn green for that street.

You don't need to worry about the process of detecting cars yet.

How your program will be tested:

Python:

t = SmartTrafficLight([42, '27th ave'], [72, '3rd st'])
t.turngreen()
#-> '3rd st'
t.turngreen() #Assuming all the cars on 3rd st are gone
#-> '27th ave'
t.turngreen() #Assuming all the cars on both streets are gone
#-> None (if both streets have an equal amount of cars)

=end

class SmartTrafficLight

  def initialize(st1, st2)
    @street_one = st1
    @street_two = st2
    @streets = [@street_one, @street_two].sort
  end

  def turngreen()
    @streets.pop.last unless @streets.empty?
  end

end
