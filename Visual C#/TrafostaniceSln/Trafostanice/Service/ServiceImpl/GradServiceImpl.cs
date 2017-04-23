using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trafostanice.Service.ServiceImpl
{
	class GradServiceImpl : GradService
	{
		GradRepository gradRepository = new GradRepository();
		public List<Grad> findAll()
		{
			return gradRepository.findAll();
		}

		public Grad findOne(int id)
		{
			return gradRepository.findOne(id);
		}

		public Grad findByName(string name) {
			return gradRepository.findByName(name);
		}

		public Grad remove(int id)
		{
			throw new NotImplementedException();
		}

		public Grad save(Grad grad)
		{
			throw new NotImplementedException();
		}

		public Grad saveAll(List<Grad> gradovi)
		{
			throw new NotImplementedException();
		}
	}
}
