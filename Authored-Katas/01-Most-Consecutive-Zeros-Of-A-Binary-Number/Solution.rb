def max_consec_zeros(str)
  running_tally = 0
  most_so_far = 0

  str.to_i.to_s(2).each_char do |char|
    if char == "0"
      running_tally += 1
      most_so_far = running_tally if running_tally > most_so_far
    else
      running_tally = 0
    end
  end

  standard_to_written = {
          0 => "Zero",
          1 => "One",
          2 => "Two",
          3 => "Three",
          4 => "Four",
          5 => "Five",
          6 => "Six",
          7 => "Seven",
          8 => "Eight",
          9 => "Nine",
          10 => "Ten",
          11 => "Eleven",
          12 => "Twelve",
          13 => "Thirteen",
          14 => "Fourteen",
          15 => "Fifteen"
  }

  standard_to_written[most_so_far]
end
