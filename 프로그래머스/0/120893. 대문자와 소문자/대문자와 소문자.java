class Solution {
    public String solution(String my_string) {
        String result = "";
        for(int i=0; i<my_string.length(); i++){
            char c = my_string.charAt(i);
            
            result += Character.isUpperCase(c) 
                    ? Character.toLowerCase(c)
                    : Character.toUpperCase(c);
        }
        return result;
    }
}