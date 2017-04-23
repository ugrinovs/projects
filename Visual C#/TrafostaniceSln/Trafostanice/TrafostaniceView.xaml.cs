using System;
using System.Collections.Generic;
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

namespace Trafostanice
{
	/// <summary>
	/// Interaction logic for TrafostaniceView.xaml
	/// </summary>
	partial class TrafostaniceView : Page
	{
		internal Trafostanica trafostanica { get; set; }
		public TrafostaniceView()
		{
			InitializeComponent();
			trafostaniceListBox.Items.Add("Trenutno nema trafostanica");
		}

		public TrafostaniceView(Trafostanica trafostanica, List<Transformator> transformatori)
		{
			InitializeComponent();
			this.trafostanica = trafostanica;
			foreach (Transformator transformator in transformatori)
			{
				trafostaniceListBox.DisplayMemberPath = "Naziv";
				trafostaniceListBox.Items.Add(transformator);
			}
		}
	}
}
