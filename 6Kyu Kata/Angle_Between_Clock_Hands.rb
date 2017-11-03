# Given a Date, return the angle between the two hands of a 12-hour analog clock in radians.

# For example, at 3:00 the angle is π/2 (90 degrees)

# Return the smaller of the angles ( <= π )
# Return π if the hands are opposite
# Note: The hour hand does not "snap" to the tick mark - e.g. at 6:30 the angle is not 0 because the hour hand is at 6.5, not 6.0
# There is no "seconds" hand, so the minutes hand snaps to the minute

# My Solution

def hand_angle(date)
  hour = date.strftime("%H").to_f
  minute = date.strftime("%M").to_f

  if hour == 12
    hour = 0
  end

  if minute == 60
    minute = 0
  end

  hour_angle = (hour * 30) + (minute * 0.5)
  minute_angle = (minute * 6)

  difference = (hour_angle - minute_angle).abs

  if difference > 180
    difference = (360 - difference)
  else
    difference = difference
  end

  deg_to_rad = (difference / 180) * (Math::PI)

  return deg_to_rad
end

# A solution from another Codewars user

def hand_angle date
  hr = date.strftime("%l").to_f
  min = date.strftime("%M").to_f
  hr_angle = 30 * hr + 0.5 * min  
  min_angle = 6 * min

  angle = [(hr_angle - min_angle).abs , (hr_angle - min_angle - 360).abs].min
  angle/180 * 3.1416
end
