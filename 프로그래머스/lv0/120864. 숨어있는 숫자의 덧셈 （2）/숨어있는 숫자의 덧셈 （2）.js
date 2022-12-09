function solution(my_string) {
    return my_string.split(/\D+/).reduce((acc, cur) => acc + +cur, 0);
}