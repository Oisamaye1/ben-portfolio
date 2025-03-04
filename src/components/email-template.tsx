import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => 
    
        {
        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    backgroundColor: "#f8f9fa",
                    textAlign: "center",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <h1 style={{ margin: "0", color: "#333", fontSize: "24px" }}>Message from {name}</h1>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "20px" }}>
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ padding: "10px 0" }}>
                        <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                          <strong>From:</strong> {name} ({email})
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "20px 0", borderTop: "1px solid #e9ecef", borderBottom: "1px solid #e9ecef" }}>
                        <div style={{ color: "#333", fontSize: "16px", lineHeight: "1.5" }}>{message}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "20px 0" }}>
                        <p style={{ margin: "0", color: "#666", fontSize: "14px", textAlign: "center" }}>
                          This email was sent in response to your inquiry.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  style={{ padding: "20px", backgroundColor: "#f8f9fa", textAlign: "center", borderTop: "1px solid #e9ecef" }}
                >
                  <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                    © {new Date().getFullYear()} Ovioisa Benjamin. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </div>
        )
      }
      
      
