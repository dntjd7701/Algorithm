import sys
from collections import deque

def main():
    N, M, K = map(int, sys.stdin.readline().split())
    board = [list(sys.stdin.readline().strip()) for _ in range(N)]
    x1, y1, x2, y2 = map(int, sys.stdin.readline().split())
    x1, y1, x2, y2 = x1-1, y1-1, x2-1, y2-1
    
    # 방향 벡터
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    
    # 방문 배열 (거리 정보 저장)
    visited = [[-1] * M for _ in range(N)]
    visited[x1][y1] = 0
    
    # BFS 큐
    q = deque([(x1, y1)])
    
    while q:
        x, y = q.popleft()
        
        # 목적지에 도달했는지 확인
        if x == x2 and y == y2:
            print(visited[x][y])
            return
        
        # 4방향 탐색
        for i in range(4):
            # K칸까지 이동 가능
            for k in range(1, K+1):
                nx = x + dx[i] * k
                ny = y + dy[i] * k
                
                # 범위 체크
                if not (0 <= nx < N and 0 <= ny < M):
                    break
                    
                # 벽 체크
                if board[nx][ny] == '#':
                    break
                    
                # 이미 방문했고, 현재 거리보다 작거나 같은 경우
                if visited[nx][ny] != -1 and visited[nx][ny] <= visited[x][y]:
                    break
                    
                # 방문하지 않았거나, 더 긴 거리로 방문한 경우
                if visited[nx][ny] == -1 or visited[nx][ny] > visited[x][y] + 1:
                    visited[nx][ny] = visited[x][y] + 1
                    q.append((nx, ny))
    
    print(-1)

if __name__ == "__main__":
    main() 