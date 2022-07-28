it('should calculate low-bracket', function (){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
})
it('should calculate high-bracket', function (){
    expect(calculateTaxes(50000)).toBe(12500);
    expect(calculateTaxes(80000)).toBe(20000);
})

it('should remove dupes from arr', function() {
    expect(removeDupes([1,2,3,4,4,4])).toEqual([1,2,3,4])
    expect(removeDupes('slaaaaaam')).toBe('slam')
    expect(removeDupes('hello')).toBeInstanceOf(String)
})

it('remove value from array', function() {
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
})

it('should give invalid income error', function() {
    expect(() => calculateTaxes('asdgasd')).toThrowError()
    expect(() => calculateTaxes([])).toThrowError()
    expect(() => calculateTaxes(true)).toThrowError()
})