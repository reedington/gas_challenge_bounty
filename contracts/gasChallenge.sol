// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract gasChallenge {
    uint8[10] numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function getSumOfArray() public view returns (uint256) {
        uint256 sum = 0;
        uint256 length = numbers.length; // Cache the length of the array
        for (uint256 i = 0; i < length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

    function notOptimizedFunction() public {
        for (uint256 i = 0; i < numbers.length; i++) {
            numbers[i] = 0;
        }
    }

    function optimizedFunction() public {
        uint8[10] memory emptyArray;
        numbers = emptyArray;
    }
}
