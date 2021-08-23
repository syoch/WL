#!/bin/sh

node convert
gcc output/cpp.cpp -o main
./main