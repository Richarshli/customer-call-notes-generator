function generateNotes() {
  const customerName = document.getElementById("customerName").value;
  const reason = document.getElementById("reason").value;
  const actions = document.getElementById("actions").value;
  const resolution = document.getElementById("resolution").value;

  const notes = `
Customer Name: ${customerName}

Reason for Call:
${reason}

Actions Taken:
${actions}

Resolution / Next Steps:
${resolution}

Call Summary:
Customer contacted support regarding the issue listed above. The concern was reviewed, appropriate actions were taken, and the resolution or next steps were documented according to standard customer service documentation practices.
  `;

  document.getElementById("output").innerText = notes;
}
