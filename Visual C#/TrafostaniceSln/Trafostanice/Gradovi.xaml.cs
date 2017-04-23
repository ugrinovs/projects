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
using Trafostanice.Model;
using Trafostanice.Service;
using Trafostanice.Service.ServiceImpl;

namespace Trafostanice
{
	/// <summary>
	/// Interaction logic for Gradovi.xaml
	/// </summary>
	public partial class Gradovi : Page
	{
		private GradService gradService = new GradServiceImpl();
		private TrafostanicaService trafostanicaService = new TrafostanicaServiceImpl();
		private TransformatorService transformatorService = new TransformatorServiceImpl();

		public Gradovi()
		{
			InitializeComponent();
			GradRepository gradRepository = new GradRepository();
			Grad grad = gradRepository.findOne(1);
		}
		private void buttonPrikaziTrafostanicu_Click(object sender, RoutedEventArgs e)
		{
			Trafostanica trafostanica = new Trafostanica();
			List<Transformator> transformatori = new List<Transformator>();
			if (listBoxTrafostaniceRezultat.SelectedItem.GetType().IsInstanceOfType(trafostanica))
			{
				trafostanica = (Trafostanica)listBoxTrafostaniceRezultat.SelectedItem;
				transformatori = transformatorService.findAllByTrafostanicaAndGrad(trafostanica);


				if (transformatori.Count > 0)
				{
					this.NavigationService.Content = new TrafostaniceView(trafostanica, transformatori);
					//labelBrojTrafostanica.Content = "Prikaz rezultata za ";
					//labelBrojTrafostanicaRezultat.Content = trafostanica.Naziv;

					//listBoxTrafostaniceRezultat.Items.Clear();
					//foreach (Transformator transformator in transformatori)
					//{
					//	listBoxTrafostaniceRezultat.DisplayMemberPath = "Naziv";
					//	listBoxTrafostaniceRezultat.Items.Add(transformator);

					//}
				}
				else if (listBoxTrafostaniceRezultat.SelectedItem.GetType().IsInstanceOfType(trafostanica))
				{
					MessageBox.Show("Trenutno nema informacija za trafostanicu " + trafostanica.Naziv);
				}
			}
			else if (listBoxTrafostaniceRezultat.SelectedItem.GetType() == typeof(Transformator))
			{
				Transformator transformator = (Transformator)listBoxTrafostaniceRezultat.SelectedItem;
				MessageBox.Show("Trenutno nema rezultata za transformator " + transformator.Naziv);
			}

		}

		private void comboBoxGradovi_Initialized(object sender, EventArgs e)
		{
			List<Grad> gradovi = gradService.findAll();
			foreach (Grad grad in gradovi)
			{
				comboBoxGradovi.Items.Add(grad.Naziv);
			}
		}

		private void comboBoxGradovi_SelectionChanged(object sender, SelectionChangedEventArgs e)
		{
			string nazivGrada = comboBoxGradovi.SelectedValue.ToString();

			Grad grad = gradService.findByName(nazivGrada);

			List<Trafostanica> trafostanice = trafostanicaService.findAllByGrad(grad);

			labelGradRezultat.Content = nazivGrada;
			labelBrojTrafostanicaRezultat.Content = trafostanice.Count;
			listBoxTrafostaniceRezultat.Items.Clear();

			foreach (Trafostanica trafostanica in trafostanice)
			{
				listBoxTrafostaniceRezultat.DisplayMemberPath = "Naziv";
				listBoxTrafostaniceRezultat.Items.Add(trafostanica);

			}
		}
		private void buttonPrikaziSliku_Click(object sender, RoutedEventArgs e)
		{
			Process.Start("C:\\Users\\Stefan\\Desktop\\Cursor.png");
		}


		private void listBoxTrafostaniceRezultat_SelectionChanged(object sender, SelectionChangedEventArgs e)
		{
			if (null != listBoxTrafostaniceRezultat.SelectedValue)
			{
				buttonPrikaziTrafostanicu.IsEnabled = true;
			}
			else
			{
				buttonPrikaziTrafostanicu.IsEnabled = false;
			}
		}
	}
}
