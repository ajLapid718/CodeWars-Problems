def bucketize(arr)
  hsh = Hash.new(0)
  buckets = [nil]

  arr.each_with_index do |num, idx|
    hsh[num] += 1
    buckets[idx+1] = nil
  end
    
  hsh.each do |k,v|
    if buckets[v].nil?
      buckets[v] = [k]
    else
      buckets[v].push(k)
      buckets[v].sort!
    end
  end

  buckets
end
