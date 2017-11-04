def blackjack_outcome(*cards)
  binary_hand = []

  cards.each do |card|
    binary_hand << card.to_s.chars.map { |digit| Integer(digit) }
  end

  hand_value = 0
  values = []

  binary_hand.each do |card|
    card.reverse.each_with_index do |bit, idx|
      hand_value += (bit) * (2 ** idx)
    end
    values << hand_value
    hand_value = 0
  end

  first_two_cards = values.first(2)

  if first_two_cards.reduce(:+) == 21 && first_two_cards.all? { |val| val <= 11 } && values.length == 2
    return "Classic Blackjack!"
  elsif first_two_cards.reduce(:+) == 21
    if values[2].nil?
      return "Remixed Blackjack!"
    else
      if values[2].odd?
        return "Super Blackjack!"
      else
        return "Bust!"
      end
    end
  elsif values.reduce(:+) == 21
    return "21!"
  else
    return "Unlucky!"
  end
end
