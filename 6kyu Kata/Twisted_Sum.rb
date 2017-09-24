# Find the sum of the digits of all the numbers from 1 to N (both ends included).
#
# For N = 10 the sum is 1+2+3+4+5+6+7+8+9+(1+0) = 46
#
# For N = 11 the sum is 1+2+3+4+5+6+7+8+9+(1+0)+(1+1) = 48
#
# For N = 12 the sum is 1+2+3+4+5+6+7+8+9+(1+0)+(1+1) +(1+2)= 51

def solution(n)
	(1..n).map(&:to_s).map(&:chars).join.chars.map(&:to_i).reduce(:+)
end
