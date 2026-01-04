# Can Özcan - Kişisel Web Sitesi

GitHub Pages'de yayınlanan modern ve responsive kişisel web sitesi.

## 🚀 GitHub Pages'e Nasıl Yayınlanır?

### Yöntem 1: GitHub Web Arayüzü ile (En Kolay)

1. **GitHub'da Repository Oluşturun**
   - GitHub.com'a gidin ve giriş yapın
   - Sağ üstteki "+" butonuna tıklayın
   - "New repository" seçeneğini seçin
   - Repository adını **`kullaniciadi.github.io`** formatında verin (örn: `canozcan.github.io`)
   - Repository'yi **Public** olarak oluşturun
   - "Add a README file" seçeneğini işaretlemeyin (zaten README var)
   - "Create repository" butonuna tıklayın

2. **Dosyaları GitHub'a Yükleyin**
   - Repository sayfanızda "uploading an existing file" linkine tıklayın
   - Veya "Add file" > "Upload files" seçeneğine tıklayın
   - Tüm dosyaları (index.html, styles.css, script.js, README.md) sürükleyip bırakın
   - "Commit changes" butonuna tıklayın

3. **GitHub Pages'i Aktifleştirin**
   - Repository sayfanızda **"Settings"** sekmesine gidin
   - Sol menüden **"Pages"** seçeneğine tıklayın
   - "Source" bölümünden **"Deploy from a branch"** seçin
   - Branch olarak **"main"** seçin
   - Folder olarak **"/ (root)"** seçin
   - **"Save"** butonuna tıklayın

4. **Web Sitenizi Görüntüleyin**
   - Birkaç dakika sonra (genellikle 1-2 dakika) web siteniz şu adreste yayında olacak:
   - `https://kullaniciadi.github.io` (örn: `https://canozcan.github.io`)

### Yöntem 2: Git ile (Terminal)

Eğer bilgisayarınızda Git yüklüyse:

1. **Terminal/PowerShell'i Açın**
   - Proje klasörünüze gidin: `cd C:\Users\canoz\Desktop\Githubio`

2. **Git Repository'si Oluşturun**
   ```bash
   git init
   git add .
   git commit -m "İlk commit - Web sitesi yayınlandı"
   git branch -M main
   ```

3. **GitHub Repository'sine Bağlayın**
   ```bash
   git remote add origin https://github.com/KULLANICIADI/KULLANICIADI.github.io.git
   git push -u origin main
   ```
   (KULLANICIADI kısmını kendi GitHub kullanıcı adınızla değiştirin)

4. **GitHub Pages'i Aktifleştirin**
   - GitHub repository sayfanıza gidin
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: main, Folder: / (root)
   - Save

## 📝 Özelleştirme

### İçerik Güncellemeleri
- `index.html` - Ana içerik dosyası
- `styles.css` - Stil ve tasarım
- `script.js` - JavaScript fonksiyonları

### LinkedIn Postları Eklemek
`index.html` dosyasında "AI Yayınları" bölümünde yeni post eklemek için:
```html
<div class="post-link-item">
    <div class="post-link-icon"><i class="fab fa-linkedin"></i></div>
    <div class="post-link-content">
        <h3>Post Başlığı</h3>
        <p>Post açıklaması...</p>
        <a href="POST_URL" target="_blank" class="post-link-btn">
            LinkedIn'de Görüntüle <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>
```

## 🎨 Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Smooth scroll navigasyon
- ✅ Animasyonlu bölümler
- ✅ Terminal UI elementi
- ✅ LinkedIn post linkleri
- ✅ Mobil uyumlu

## 📱 Desteklenen Tarayıcılar

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📄 Lisans

Bu proje kişisel kullanım içindir.
