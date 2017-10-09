# Lots of museumes allow you to be a member, for a certain amount amount_by_year you can have unlimited access to the museum.

# In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass.
# The function takes 2 arguments annual_price and individual_price.

def how_many_times(annual_price, individual_price)
  amount_of_visits = 1

  until (individual_price * amount_of_visits) >= annual_price
    amount_of_visits += 1
  end

  return amount_of_visits
end
