# Discord 音樂機器人

歡迎使用 **Discord 音樂機器人**！本專案旨在為您的 Discord 伺服器提供高效且易於使用的音樂播放功能。以下將介紹如何安裝、設定及部屬此機器人。

## 安裝

### 前置需求

在開始之前，請確保您的系統已安裝以下軟體：

1. **Docker**  
   下載並安裝 Docker：[Docker 官方網站](https://www.docker.com/get-started)

2. **Docker Compose**  
   下載並安裝 Docker Compose：[Docker Compose 官方文件](https://docs.docker.com/compose/install/)

### 創建 Discord 機器人

1. 前往 [Discord 開發者門戶](https://discord.com/developers/applications)。
2. 點擊 **"New Application"** 創建一個新的應用程式。
3. 為您的應用程式命名，然後點擊 **"Create"**。
4. 在左側選單中選擇 **"Bot"**，然後點擊 **"Add Bot"**。
5. 記下機器人的 **Token**（稍後會在設定中使用）。

### 邀請機器人至您的伺服器

1. 在 Discord 開發者門戶中，選擇您的應用程式。
2. 前往 **"OAuth2"** > **"URL Generator"**。
3. 在 **Scopes** 中選擇 `bot`。
4. 在 **Bot Permissions** 中選擇所需的權限（建議至少包含音樂播放相關的權限）。
5. 複製生成的 URL，並在瀏覽器中打開以邀請機器人至您的 Discord 伺服器。

## 設定

1. 在專案根目錄下創建一個 `.env` 檔案。
2. 在 `.env` 檔案中加入以下內容：

   ```env
   TOKEN=您的Discord機器人Token
   GID=您的伺服器Guild ID
   UID=您的Discord機器人ID
   ```

   - **TOKEN**：您的 Discord 機器人 Token。
   - **GID**：您的 Discord 伺服器 ID。
   - **UID**：您的 Discord 機器人 ID。

   您可以在 Discord 中右鍵點擊伺服器圖示或機器人圖示，選擇 **"複製 ID"** 來獲取 **GID** 和 **UID**（需要在 Discord 設定中啟用開發者模式）。

3. **CPU 架構設定**：

   - 如果您的系統是 **ARM64** 架構，無需修改 `Dockerfile`。
   - 如果不是 **ARM64** 架構，請打開 `Dockerfile`，找到以下內容：

     ```dockerfile
     FROM --platform=arm64 node:20
     ARG ARCH=arm64
     ```

     修改為適合您系統的架構，例如：

     ```dockerfile
     FROM node:20
     ARG ARCH=amd64
     ```

## 部屬

完成上述安裝與設定後，您可以使用以下指令來部屬機器人：

```bash
docker-compose up --build -d
```

此指令將會建構並啟動 Docker 容器，您的 Discord 音樂機器人應該已經開始運作。

## 常見問題

- **無法啟動容器**：請確認 Docker 和 Docker Compose 已正確安裝並運行。
- **機器人無法加入伺服器**：請確認您使用的邀請連結包含正確的權限，並且機器人已被邀請至目標伺服器。
- **音樂無法播放**：請檢查 `.env` 檔案中的設定是否正確，特別是 `TOKEN`、`GID` 和 `UID`。

若有其他問題，歡迎提出 issue 或聯繫作者！

---

感謝您使用 **Discord 音樂機器人**！希望這個工具能為您的 Discord 社群帶來更多樂趣。

# 授權

此專案採用 [MIT 授權](LICENSE)。

# 連絡方式

如有任何問題或建議，請透過 [GitHub Issues](https://github.com/Tobydog0501/tobydogBot/issues) 或 [Ticket](https://ticket.tobydog0501.site/submit) 與我們聯絡。

# 臉書與推特

保持關注，獲取最新的更新與資訊！

---

© 2024 Tobydog