# Find the total sum of angles in an n sided shape. N will be greater than 2.

def angle(n)
  amount_of_triangles = n - 2
  sum_of_angles = amount_of_triangles * 180
  return sum_of_angles
end
