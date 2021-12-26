# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    if x<0
        return false
    end
    return x.to_s == x.to_s.split("").reverse().join("");
end