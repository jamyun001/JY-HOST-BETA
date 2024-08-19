<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마인크래프트 서버 호스팅</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>마인크래프트 서버 호스팅 서비스</h1>
    </header>
    <main>
        <section id="create-server">
            <h2>서버 생성</h2>
            <form id="server-form">
                <label for="server-name">서버 이름:</label>
                <input type="text" id="server-name" required>
                <label for="server-type">서버 유형:</label>
                <select id="server-type">
                    <option value="spigot">Spigot</option>
                    <option value="paper">Paper</option>
                    <option value="vanilla">Vanilla</option>
                </select>
                <button type="submit">서버 생성</button>
            </form>
        </section>
        <section id="server-list">
            <h2>내 서버 목록</h2>
            <ul id="servers"></ul>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
