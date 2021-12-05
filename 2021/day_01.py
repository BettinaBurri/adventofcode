#! /usr/bin/python3
data = []
with open('2021/ressources/input_001.txt', 'r') as f:
    lines = f.readlines()
    for line in lines:
        data.append(int(line.rstrip()))
data