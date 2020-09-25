k = int(input('Enter No. of Bits : '))
s = ['']*(2**k)
s[0] = '0'
s[1] = '1'
for i in range(1,k):
	p = s[0:2**i]
	for j in range(2**i):
		s[j] = '0'+p[j]
	for j in range(2**i):
		s[2**i+j] = '1'+p[2**i-1-j]
for i in s:
	print(i)
