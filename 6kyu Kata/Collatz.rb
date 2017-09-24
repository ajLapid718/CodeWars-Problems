def collatz(n)
	perform_calc(n).reverse.join("->")
end

def perform_calc(n)
	return [1] if n == 1
	counter = perform_calc(perform_calc_helper(n))
	counter << n
end

def perform_calc_helper(num)
	if num.even?
		num / 2
	else
		(num * 3) + (1)
	end
end
