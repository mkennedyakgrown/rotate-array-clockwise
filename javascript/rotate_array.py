def rotate_array(list, k):
    if len(list) == 0:
        return list
    if len(list) == k:
        return list
    
    rotated_list = list
    for i in range(0, k):
        rotated_list.insert(0, rotated_list.pop())

    return rotated_list

print("Expecting: [4, 1, 2, 3]")
print("=>", rotate_array([1, 2, 3, 4], 1))

print("")

print("Expecting: [2, 3, 1]")
print("=>", rotate_array([1, 2, 3], 2))

print("")

print("Expecting: [1, 2, 3]")
print("=>", rotate_array([1, 2, 3], 3))