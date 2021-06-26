using api_rest_guapa.Util;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace test_app_guapa.Util
{
    [TestClass]
    public class StringProcessorTest
    {
        [TestMethod]

        public void StringProcessorTesting()
        {
            string sentence = "Programando meu primeiro teste unitário";

            string d = StringProcessor.ToUpperCase(sentence);

            foreach(char c in d) 
            {
                if(c != ' ')
                {
                Assert.IsTrue(char.IsUpper(c));
                }
            }
        }
    }
}