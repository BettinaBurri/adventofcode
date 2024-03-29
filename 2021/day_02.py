#! /usr/bin/python3
def read_data(file_path):
    data = []
    with open(file_path, 'r') as file:
        lines = file.readlines()
        for line in lines:
            data.append(line.rstrip())
    return data

def sliding_window_data(data):
    three_sum = []
    for i in range(len(data)-2):
        three_sum.append(data[i] + data[i+1] + data[i+2])
    return three_sum

def calculate_position(data):
    position = [0, 0]
    
    for i in range(len(data)-1):
        if data[i] < data[i+1]:
            counter += 1
    return counter

FILE = '2021/ressources/input_002.txt'
DATA = read_data(FILE)
print('Part 1', count_increases(DATA))
THREE_DATA = sliding_window_data(DATA)
print('Part 2', count_increases(THREE_DATA))
