document.getElementById('server-form').addEventListener('submit', function(e) {
    e.preventDefault(); // 기본 제출 동작 방지

    const serverName = document.getElementById('server-name').value;
    const serverType = document.getElementById('server-type').value;

    // 서버 생성 로직 (예: API 호출)
    createServer(serverName, serverType);
});

function createServer(name, type) {
    // 여기서 실제 API 호출을 통해 서버를 생성하는 로직을 구현
    // 예시로 서버를 리스트에 추가하는 코드
    const serversList = document.getElementById('servers');
    const serverItem = document.createElement('li');
    serverItem.textContent = `${name} (${type})`;
    serversList.appendChild(serverItem);

    // 입력 필드 초기화
    document.getElementById('server-name').value = '';
}
