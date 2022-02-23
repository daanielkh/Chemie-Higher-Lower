import java.util.Random;

public class ZUFALLSGENERATOR
extends STOFFE
{
    private int length;
    private Random rand;
    
    public ZUFALLSGENERATOR()
    {
        this.length = 100;
        this.rand = new Random();
    }
    
    public void press()//wenn man richtig drueckt, soll ein zufaelliger Stoff kommen mit der jeweiligen Sidetemperatur und Bild
    {
        int n1 = rand.nextInt(3);//generiert Zufaellige Zahl 
        System.out.println(" ");
        System.out.println(stoff[n1] + " " + siedetemperatur[n1]);//gibt Stoffnamen und zugehoerige Sidetemperatur aus
    }
}