import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        int[] person1 = {1, 2, 3, 4, 5};
        int[] person2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] person3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

        int[] scores = new int[3];

        for (int i = 0; i < answers.length; i++) {
            if (answers[i] == person1[i % person1.length]) scores[0]++;
            if (answers[i] == person2[i % person2.length]) scores[1]++;
            if (answers[i] == person3[i % person3.length]) scores[2]++;
        }

        int maxScore = Math.max(scores[0], Math.max(scores[1], scores[2]));

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] == maxScore) {
                result.add(i + 1);
            }
        }

        return result.stream().mapToInt(i -> i).toArray();
    }

    // 메인 함수: 여기서 테스트할 수 있어요!
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] answers = {1, 3, 2, 4, 2}; // 테스트 케이스
        int[] result = sol.solution(answers);

        System.out.println("가장 많이 맞힌 수포자: " + Arrays.toString(result));
    }
}
