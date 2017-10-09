# You've just recently been hired to calculate scores for a Dart Board game!

# Scoring specifications:
# 0 points - radius above 10
# 5 points - radius between 5 and 10 inclusive
# 10 points - radius less than 5

# If all radiuses are less than 5, award 100 BONUS POINTS!

# Write a function that accepts an array of radiuses (can be integers and/or floats),
# and returns a total score using the above specification.
# An empty array should return 0.

# Examples:
# scoreThrows( [1, 5, 11] ) => returns 15
# scoreThrows( [15, 20, 30] ) => returns 0
# scoreThrows( [1, 2, 3, 4] ) => returns 140

def scoreThrows(radiuses)
  return 0 if radiuses.empty?

  total = 0
  
  if radiuses.all? { |r| r < 5 }
    total += 100
  end

  radiuses.each do |rad|
    if rad < 5
      total += 10
    elsif rad.between?(5,10)
      total += 5
    else
      total += 0
    end
  end

  total
end
