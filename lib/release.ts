// O'yinning oxirgi relizini GitHub Releases'dan o'qiydi (yuklab olish tugmasi + statistika uchun).
// Repo `.env` dan: GITHUB_OWNER / GITHUB_REPO. Token ixtiyoriy (rate-limit uchun).

export interface ReleaseInfo {
  version: string | null;
  /** .exe (yoki .zip) installerga to'g'ridan-to'g'ri havola */
  downloadUrl: string | null;
  /** bayt hajmi */
  size: number | null;
  publishedAt: string | null;
  /** barcha asset'lar bo'yicha jami yuklab olishlar soni */
  downloads: number;
  /** reliz hali yo'qmi (sayt baribir ishlasin) */
  available: boolean;
  repoUrl: string;
}

const OWNER = process.env.GITHUB_OWNER || "IbnMansooR";
const REPO = process.env.GITHUB_REPO || "feekrcode";

export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;

function bytesToMB(n: number | null): string {
  if (!n) return "";
  return (n / 1024 / 1024).toFixed(0) + " MB";
}
export { bytesToMB };

/** Oxirgi relizni oladi. Xato/yo'q bo'lsa — `available: false` qaytaradi (sayt buzilmaydi). */
export async function getLatestRelease(): Promise<ReleaseInfo> {
  const empty: ReleaseInfo = {
    version: null,
    downloadUrl: null,
    size: null,
    publishedAt: null,
    downloads: 0,
    available: false,
    repoUrl: REPO_URL,
  };

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`,
      { headers, next: { revalidate: 600 } } // 10 daqiqa kesh
    );
    if (!res.ok) return empty;

    const data: any = await res.json();
    const assets: any[] = Array.isArray(data.assets) ? data.assets : [];
    // Windows installerni topamiz: .exe ustun, bo'lmasa .zip
    const exe =
      assets.find((a) => /setup.*\.exe$/i.test(a.name)) ||
      assets.find((a) => /\.exe$/i.test(a.name)) ||
      assets.find((a) => /\.zip$/i.test(a.name));
    const downloads = assets.reduce((sum, a) => sum + (a.download_count || 0), 0);

    return {
      version: (data.tag_name || data.name || "").replace(/^v/, "") || null,
      downloadUrl: exe ? exe.browser_download_url : null,
      size: exe ? exe.size : null,
      publishedAt: data.published_at || null,
      downloads,
      available: Boolean(exe),
      repoUrl: REPO_URL,
    };
  } catch {
    return empty;
  }
}
