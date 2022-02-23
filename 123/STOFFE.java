/**
 * alle Stoffe mit Bildern und ihre zugehörige Siedetemperatur werden hier gespeichert
 * 
 * @author (Philip Heusel)
 * @version (02-22-2022)
 */
public class STOFFE
{
    protected String[] stoff;
    private int sLength;//Laenge des Arrays stoff
    
    protected double[] siedetemperatur;
    private int sdtLength;
    
    private double[] dichte;
    private int dLength;
    
    private double[] schmelztemperatur;
    private int sztLength;
    
    //private ... Bild;
    //private int bildLength;

    public STOFFE()
    {
        this.sLength = 50;//Dater, die wir haben -1 (Array beginnt bei 0)
        this.stoff = new String[sLength];
        
        this.sdtLength = 50;
        this.siedetemperatur = new double[sdtLength];
        
        this.dLength = 48;
        this.dichte = new double[dLength];
        
        this.sztLength = 50;
        this.schmelztemperatur = new double[sztLength];
        
        this.stoff[0] = "Aluminium";
        this.stoff[1] = "Antimon";
        this.stoff[2] = "Argon";
        
        this.siedetemperatur[0] = 2470;//Sidetemperatur von stoff[0] (Aluminium)
        this.siedetemperatur[1] = 1750;
        this.siedetemperatur[2] = -185.8;
    }
}
