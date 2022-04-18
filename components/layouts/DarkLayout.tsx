import { LayoutProps } from '../../globalInterfaces';

export const DarkLayout = ({ children }: LayoutProps) => {
  return (
    <div style={{
      backgroundColor: "rgba(0,0,0,0.3)",
      borderRadius: "5px",
      padding: "10px",
    }}>
      <h3>Dark-Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
