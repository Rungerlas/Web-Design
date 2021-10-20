import java.io.BufferedReader;
//import java.io.BufferedWriter;
//import java.io.File;
import java.io.FileInputStream;
//import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class readfile {
	public static void main(String[] args) throws IOException
	{
	String strp;
	Scanner scan = new Scanner(System.in);
	System.out.println("Please Input your GEDCOM file path:");
	String infileName = scan.nextLine();
/*	System.out.println("Please Input your Save file path:");
	String outfileName = scan.nextLine();
	File file = new File(outfileName);
	if(!file.exists()) {
		file.createNewFile();
	} */
	FileInputStream inputStream = new FileInputStream(infileName);
//	FileWriter fileWriter=new FileWriter(outfileName);
	BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
//	BufferedWriter bufferedWriter=new BufferedWriter(fileWriter);
		
	String str = null;
	while((str = bufferedReader.readLine()) != null)
	{
		strp = test.split(str);
		System.out.println("-->"+str);
		System.out.println("<--"+strp);
//		bufferedWriter.write("-->"+str+"\n");
//		bufferedWriter.write("<--"+strp+"\n");
	}
	System.out.println("Finished !");
	inputStream.close();
	bufferedReader.close();
	scan.close();
//	fileWriter.close();
}}



//GEDCOM file path on my computer: D:\\chrome\\Ruohuan Xu family.ged