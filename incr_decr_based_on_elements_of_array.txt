using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the number of elements ");
            int length = Convert.ToInt32(Console.ReadLine());
            int[] num = new int[length];
            Console.WriteLine("Enter the Elements");
            for(int i=0; i<length; i++)
            {
                num[i] = Convert.ToInt32(Console.ReadLine());
            }
            for (int j = 0; j < length; j++)
            {
                if (num[j] % 2 == 0)
                {
                    num[j] = num[j] + 1;

                }
                else
                {
                    num[j] = num[j] - 1;
                }
            }
            Console.WriteLine("Output elements are");
            for (int k =0; k < length; k++)
            {
                Console.WriteLine(num[k]);
            }
        }
    }
}
