import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET() {
  try {
    const doc = new jsPDF()

    // Configuration
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - 2 * margin
    let yPos = 20

    // Helper function to add text with word wrap
    const addText = (text: string, x: number, y: number, options?: any) => {
      doc.text(text, x, y, options)
    }

    // Header - Name and Title
    doc.setFontSize(24)
    doc.setFont("helvetica", "bold")
    addText("SHARON ALIHONOU", margin, yPos)
    yPos += 10

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    addText("Développeuse Web Junior | Technicienne de Maintenance Informatique", margin, yPos)
    yPos += 15

    // Contact Information
    doc.setFontSize(9)
    addText("📧 sharonalihonou@gmail.com | 📱 07.66.52.22.34", margin, yPos)
    yPos += 5
    addText("🔗 linkedin.com/in/sharon-alihonou-2478b4318", margin, yPos)
    yPos += 5
    addText("🌐 shas2707.github.io/Portfolio_vf", margin, yPos)
    yPos += 5
    addText("📍 Paris et Île-de-France", margin, yPos)
    yPos += 12

    // Profile
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("PROFIL", margin, yPos)
    yPos += 7
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    const profileText =
      "Actuellement en 2ᵉ année de BTS SIO option SLAM, je recherche une alternance en tant que développeuse web junior et/ou technicienne de maintenance informatique, au rythme de 2 jours de cours / 3 jours en entreprise."
    const splitProfile = doc.splitTextToSize(profileText, contentWidth)
    doc.text(splitProfile, margin, yPos)
    yPos += splitProfile.length * 5 + 8

    // Experiences
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("EXPÉRIENCES PROFESSIONNELLES", margin, yPos)
    yPos += 7

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    addText("Stage Développeuse Web Junior", margin, yPos)
    yPos += 5
    doc.setFontSize(9)
    doc.setFont("helvetica", "italic")
    addText("Camara Itec Sarl | 15 juin au 25 juillet 2025", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    addText("• Mise à jour des informations sur le site shopintech.fr", margin + 3, yPos)
    yPos += 4
    addText("• Développement d'application web, base du langage Python", margin + 3, yPos)
    yPos += 4
    addText("• Utilisation des technologies Github", margin + 3, yPos)
    yPos += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    addText("Organisatrice d'Événements", margin, yPos)
    yPos += 5
    doc.setFontSize(9)
    doc.setFont("helvetica", "italic")
    addText("Indépendante | 2018 - 2022", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    addText("• Coordination d'anniversaires : thème, décoration, prestataires", margin + 3, yPos)
    yPos += 4
    addText("• Supervision budgétaire et optimisation des coûts", margin + 3, yPos)
    yPos += 4
    addText("• Gestion des invitations et des imprévus", margin + 3, yPos)
    yPos += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    addText("Assistante de Vente", margin, yPos)
    yPos += 5
    doc.setFontSize(9)
    doc.setFont("helvetica", "italic")
    addText("Magasin familiale | Juillet-Août 2022", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    addText("• Conseil clientèle, encaissement", margin + 3, yPos)
    yPos += 4
    addText("• Gestion des stocks et mise en rayon", margin + 3, yPos)
    yPos += 4
    addText("• Service client personnalisé", margin + 3, yPos)
    yPos += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    addText("Stage de Troisième dans la vente", margin, yPos)
    yPos += 5
    doc.setFontSize(9)
    doc.setFont("helvetica", "italic")
    addText("Décembre 2021", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    addText("• Responsable du rangement des vêtements", margin + 3, yPos)
    yPos += 4
    const promoText = "• Promotion des produits sur les réseaux sociaux en mettant en avant des articles sélectionnés"
    const splitPromo = doc.splitTextToSize(promoText, contentWidth - 3)
    doc.text(splitPromo, margin + 3, yPos)
    yPos += splitPromo.length * 4 + 6

    // Formations
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("FORMATIONS", margin, yPos)
    yPos += 7

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    addText("BTS SIO OPTION SLAM", margin, yPos)
    yPos += 5
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    addText("2025-2026 : Iris Paris", margin, yPos)
    yPos += 4
    addText("2024-2025 : Ingetis Paris", margin, yPos)
    yPos += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    addText("Bac Général option DGEMC", margin, yPos)
    yPos += 5
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    addText("2021-2024 : Lycée Charles Le Chauve", margin, yPos)
    yPos += 10

    // Compétences Informatiques
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("COMPÉTENCES INFORMATIQUES", margin, yPos)
    yPos += 7
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    addText("Langages : HTML, CSS, SQL, JavaScript, PHP, Python", margin, yPos)
    yPos += 5
    addText("Outils : WordPress, GitHub, Visual Studio Code, Canva, ChatGPT, Figma", margin, yPos)
    yPos += 5
    addText("Pack Office : Word, Excel, PowerPoint", margin, yPos)
    yPos += 10

    // Langues
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("LANGUES", margin, yPos)
    yPos += 7
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    addText("Anglais (B2) | Espagnol (A1) | Yoruba (C1)", margin, yPos)
    yPos += 10

    // Savoir-être
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("SAVOIR-ÊTRE", margin, yPos)
    yPos += 7
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    addText("Sens logique • Esprit de synthèse • Capacité d'adaptation", margin, yPos)
    yPos += 4
    addText("Polyvalence • Discrétion • Créativité", margin, yPos)
    yPos += 10

    // Loisirs
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    addText("LOISIRS", margin, yPos)
    yPos += 7
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    addText("Lecture : physiologie et horreur", margin, yPos)
    yPos += 4
    addText("Sports : musculation et ultimate", margin, yPos)
    yPos += 4
    addText("Cuisine : pâtisserie", margin, yPos)
    yPos += 4
    addText("Photographie : paysage", margin, yPos)

    // Generate PDF
    const pdfBuffer = doc.output("arraybuffer")

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV_Sharon_Alihonou.pdf"',
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
