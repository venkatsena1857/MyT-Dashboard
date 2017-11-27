class Solution {

    int longestPalindrome(string s) {
        
        int n = s.length();  // n = length(s);
        
        int counter = 1;  //counter = 1

		for (int i = 1;i<n;++i) {        // for i in s: 
            count(s,n,i-1,i, counter);   //counts(s,n,i-1,i,counter)
            count(s,n,i-1,i-1, counter); //counts(s,n,i-1,i-1,counter)
        }
        return counter;
    }

    void count(string s, int len, int i, int j, int &counter) {     //counts
        while(i >= 0 && j < len && s[i] == s[j]) {					//
                i--;
                j++;
                counter++;
        }
    }
};