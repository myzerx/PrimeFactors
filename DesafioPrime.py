if __name__ == '__main__':
    def Calculate():
        InputValue = int(input("Enter a number here: ")) #13195 // 600851475143
        result = InputValue
        index = 2
    
        while result > index:
            if(result % index == 0):
                print("\n",result, "Divided by", index)
                result = result/index

            else:

                index = index+1

        print("\nLargest prime factor of", InputValue, "is:", result)
    Calculate()
