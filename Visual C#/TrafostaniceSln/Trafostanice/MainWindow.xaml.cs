using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Forms;
using Trafostanice.Model;
using Trafostanice.Service;

using Trafostanice.Service.ServiceImpl;

namespace Trafostanice
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>

	public partial class MainWindow : Window
	{
		private GradService gradService = new GradServiceImpl();
		private TrafostanicaService trafostanicaService = new TrafostanicaServiceImpl();
		private TransformatorService transformatorService = new TransformatorServiceImpl();
		public MainWindow()
		{
			InitializeComponent();
			//GradRepository gradRepository = new GradRepository();
			//Grad grad = gradRepository.findOne(1);
		}

		//private void comboBoxGradovi_Initialized(object sender, EventArgs e)
		//{
		//	List<Grad> gradovi = gradService.findAll();
		//	foreach (Grad grad in gradovi) {
		//		comboBoxGradovi.Items.Add(grad.Naziv);
		//	}
		//}

		//private void comboBoxGradovi_SelectionChanged(object sender, SelectionChangedEventArgs e)
		//{
		//	string nazivGrada = comboBoxGradovi.SelectedValue.ToString();

		//	Grad grad = gradService.findByName(nazivGrada);

		//	List<Trafostanica> trafostanice = trafostanicaService.findAllByGrad(grad);

		//	labelGradRezultat.Content = nazivGrada;
		//	labelBrojTrafostanicaRezultat.Content = trafostanice.Count;
		//	listBoxTrafostaniceRezultat.Items.Clear();

		//	foreach(Trafostanica trafostanica in trafostanice) {
		//		listBoxTrafostaniceRezultat.DisplayMemberPath = "Naziv";
		//		listBoxTrafostaniceRezultat.Items.Add(trafostanica);

		//	}
		//}

		//private void listBoxTrafostaniceRezultat_SelectionChanged(object sender, SelectionChangedEventArgs e)
		//{
		//	if (null != listBoxTrafostaniceRezultat.SelectedValue)
		//	{
		//		buttonPrikaziTrafostanicu.IsEnabled = true;
		//	}
		//	else
		//	{
		//		buttonPrikaziTrafostanicu.IsEnabled = false;
		//	}
		//}

		//private void buttonPrikaziSliku_Click(object sender, RoutedEventArgs e)
		//{
		//	Process.Start("C:\\Users\\Stefan\\Desktop\\Cursor.png");
		//}

		private void gradoviMenuItem_Click(object sender, RoutedEventArgs e)
		{
			MainFrame.Content = new Gradovi();
		}

		private void trafostaniceMenuItem_Click(object sender, RoutedEventArgs e)
		{
			MainFrame.Content = new TrafostaniceView();
		}
	}
}
